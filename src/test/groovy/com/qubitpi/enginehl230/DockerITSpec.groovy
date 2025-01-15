/*
 * Copyright 2025 Jiaqi Liu
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.qubitpi.enginehl230

import org.testcontainers.containers.GenericContainer
import org.testcontainers.images.PullPolicy
import org.testcontainers.images.builder.ImageFromDockerfile
import org.testcontainers.spock.Testcontainers

import io.restassured.RestAssured
import io.restassured.http.ContentType
import spock.lang.Shared
import spock.lang.Specification
import spock.lang.Subject
import spock.lang.Unroll

import java.nio.charset.StandardCharsets
import java.nio.file.Paths

/**
 * Integration tests for WS running in Dockerfile.
 *
 * It uses testcontainers to orchestrate lifecycle of the test container through @Testcontainers annotation
 *
 * see https://www.testcontainers.org/quickstart/spock_quickstart/
 * see https://www.testcontainers.org/test_framework_integration/spock/#testcontainers-class-annotation
 */
@Testcontainers
class DockerITSpec extends Specification {

    static final int SUCCESS = 0
    static final List<String> LOCAL_ENVS = ["Mac OS X", "windows"]
    static final String CHECK_DOCKER_INSTALLED_COMMAND = "docker -v"
    static final String DOCKERFILE_ABS_PATH = String.format("%s/Dockerfile", System.getProperty("user.dir"))

    @Deprecated
    @SuppressWarnings('GroovyUnusedCatchParameter')
    private static boolean dockerNotInstalled() {
        try {
            return Runtime.getRuntime().exec(CHECK_DOCKER_INSTALLED_COMMAND).waitFor() != SUCCESS
        } catch (Exception exception) {
            return true // I hate this
        }
    }

    private static boolean isLocal() {
        return System.properties['os.name'] as String in LOCAL_ENVS
    }

    @Shared
    @Subject
    GenericContainer container = new GenericContainer<>(
            new ImageFromDockerfile().withDockerfile(Paths.get(DOCKERFILE_ABS_PATH))
    )
            .withExposedPorts(8080)
            .withImagePullPolicy(PullPolicy.defaultPolicy())

    def setupSpec() {
        RestAssured.baseURI = "http://" + container.host
        RestAssured.port = container.firstMappedPort
        RestAssured.basePath = "/v1"
    }

    def "File can be uploaded and then download"() {
        expect: "file uploads successfully with 201"
        String fileId = RestAssured.given()
                .multiPart("file", new File("src/test/resources/pride-and-prejudice-by-jane-austen.txt"))
                .when()
                .post("/file/upload")
                .then()
                .statusCode(201)
                .extract().path("fileId")

        and: "the same file can be downloaded with file ID"
        RestAssured.given()
                .contentType(ContentType.BINARY)
                .queryParam("fileId", fileId)
                .when()
                .get("/file/download")
                .then()
                .statusCode(200)
                .extract()
                .asString() == getClass()
                .getClassLoader()
                .getResourceAsStream("pride-and-prejudice-by-jane-austen.txt")
                .getText(StandardCharsets.UTF_8.name())
    }
}
