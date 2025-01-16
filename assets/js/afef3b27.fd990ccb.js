"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25],{5814:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=i(4848),a=i(8453);const r={slug:"env-var-in-pom",title:"Refer to Environment Variables in POM",authors:"jiaqi",tags:["Java","Maven"]},o=void 0,s={permalink:"/Engine-HL230/blog/env-var-in-pom",editUrl:"https://github.com/QubitPi/Engine-HL230/tree/master/docs/blog/2019-08-23-env-var-in-pom.md",source:"@site/blog/2019-08-23-env-var-in-pom.md",title:"Refer to Environment Variables in POM",description:"[//]: # (Copyright 2025 Jiaqi Liu)",date:"2019-08-23T00:00:00.000Z",formattedDate:"August 23, 2019",tags:[{label:"Java",permalink:"/Engine-HL230/blog/tags/java"},{label:"Maven",permalink:"/Engine-HL230/blog/tags/maven"}],readingTime:1.415,hasTruncateMarker:!0,authors:[{name:"Jack",title:"Maintainer of Engine HL230",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"env-var-in-pom",title:"Refer to Environment Variables in POM",authors:"jiaqi",tags:["Java","Maven"]},unlisted:!1,prevItem:{title:"Reading and Writing Avro Files from the Command Line",permalink:"/Engine-HL230/blog/read-avro-command-line"},nextItem:{title:"Java System Properties & Environment Variables API's",permalink:"/Engine-HL230/blog/java-env-properties"}},l={authorsImageUrls:[void 0]},c=[{value:"Environment Variables",id:"environment-variables",level:2}];function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,t.jsxs)(n.p,{children:["To refer to environment variables from the pom.xml, we can use the ",(0,t.jsx)(n.code,{children:"${env.VARIABLE_NAME}"})," syntax."]}),"\n",(0,t.jsx)(n.p,{children:"For instance, let's use it to externalize the Java version in the build process:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.8.1</version>\n            <configuration>\n                <source>${env.JAVA_VERSION}</source>\n                <target>${env.JAVA_VERSION}</target>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n"})}),"\n",(0,t.jsx)(n.p,{children:"We should remember to pass the Java version information via environment variables. If we fail to do so, then we won't be\nable to build the project."}),"\n",(0,t.jsx)(n.p,{children:"To run the Maven goals or phases against such a build file, we should first export the environment variable. For\ninstance"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export JAVA_VERSION=17\nmvn clean package\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In order to provide a default when the ",(0,t.jsx)(n.code,{children:"JAVA_VERSION"})," environment variable is missing we can use a Maven profile:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<profiles>\n    <profile>\n        <id>default-java</id>\n        <activation>\n            <property>\n                <name>!env.JAVA_VERSION</name>\n            </property>\n        </activation>\n        <build>\n            <plugins>\n                <plugin>\n                    <groupId>org.apache.maven.plugins</groupId>\n                    <artifactId>maven-compiler-plugin</artifactId>\n                    <version>3.8.1</version>\n                    <configuration>\n                        <source>1.8</source>\n                        <target>1.8</target>\n                    </configuration>\n                </plugin>\n            </plugins>\n        </build>\n    </profile>\n</profiles>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As shown above, we're creating a profile and making it active only if the ",(0,t.jsx)(n.code,{children:"JAVA_VERSION"})," environment variable is missing\n(",(0,t.jsx)(n.code,{children:"!env.JAVA_VERSION"})," part). If that happens, then this new plugin definition will override the existing one."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var t=i(6540);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);