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
package com.qubitpi.enginehl230.application

import com.qubitpi.enginehl230.web.filters.CorsFilter

import org.glassfish.jersey.internal.inject.Binder

import io.github.qubitpi.athena.application.ResourceConfig
import io.github.qubitpi.athena.config.SystemConfig
import io.github.qubitpi.athena.config.SystemConfigFactory
import jakarta.inject.Provider
import spock.lang.Specification
import spock.lang.Unroll

import javax.sql.DataSource

class BinderFactorySpec extends Specification {

    static final SystemConfig SYSTEM_CONFIG = SystemConfigFactory.instance
    static final Set<Class> ALWAYS_REGISTERED_FILTERS = [CorsFilter] as Set

    @SuppressWarnings('GroovyAccessibility')
    def "Instantiation triggers initialization and binding lifecycles"() {
        setup: "binder is mocked out"
        BinderFactory binderFactory = Mock(BinderFactory)
        binderFactory.buildBinder() >> Mock(Binder)

        when: "injecting resources"
        org.glassfish.jersey.server.ResourceConfig resourceConfig = new ResourceConfig()

        then: "all request & response filters are injected"
        resourceConfig.classes.containsAll(ALWAYS_REGISTERED_FILTERS)
    }

    @Unroll
    @SuppressWarnings('GroovyAccessibility')
    def "#providerClass produces singleton DataSource"() {
        given: "a provider instance"
        Provider<DataSource> provider = BinderFactory.initProvider(providerClass)

        expect: "getting DataSource from it twice results in the same DataSource object"
        provider.get() is provider.get()

        where:
        [providerClass] << getTestIterationData()
    }

    @Unroll
    @SuppressWarnings('GroovyAccessibility')
    def "When #providerClass is specified, #dbType DataSource provider is instantiated"() {
        setup: "provider config is specified at runtime"
        SYSTEM_CONFIG.setProperty('athena__data_source_provider', providerClass)

        expect: "re-initiating factory reloads a new provider"
        new BinderFactory().dataSourceProvider.class.simpleName == "${dbType}DataSourceProvider"

        where:
        [providerClass, dbType] << getTestIterationData()
    }

    @Unroll
    @SuppressWarnings('GroovyAccessibility')
    def "Happy path loads #providerClass" () {
        when: "a loadable provider class is trying to be instantiated"
        BinderFactory.initProvider(providerClass)

        then: "no error occurs"
        noExceptionThrown()

        where:
        [providerClass] << getTestIterationData()
    }

    @SuppressWarnings('GroovyAccessibility')
    def "When DataSource Provider is not on classpath, a runtime exception occurs"() {
        when: "trying to instantiate a non-existing provider from classpath"
        BinderFactory.initProvider("non.existing.datasource.provider")

        then:
        Exception exception = thrown(IllegalStateException)
        exception.message == "Cannot locate DataSource provider class 'non.existing.datasource.provider'"
    }

    @SuppressWarnings('GroovyResultOfObjectAllocationIgnored')
    def "When a DataSource Provider classpath config value is not found, runtime error occurs"() {
        setup: "provider class name is made non-existent"
        SYSTEM_CONFIG.clearProperty("athena__data_source_provider")

        when: "binding happens"
        new BinderFactory()

        then: "error occurs"
        Exception exception = thrown(IllegalStateException)
        exception.message == "Config error. Please check service log for details"
    }

    /**
     * Returns the data to use in where blocks as a list of lists.
     *
     * @return the data as a list of lists
     */
    def getTestIterationData() {
        [
                ['com.qubitpi.enginehl230.application.BinderFactory$DerbyDataSourceProvider', "Derby"],
                ['com.qubitpi.enginehl230.application.BinderFactory$MySQLDataSourceProvider', "MySQL"]
        ]
    }
}
