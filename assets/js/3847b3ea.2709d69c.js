"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6214],{1111:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=i(4848),s=i(8453);const o={sidebar_position:2,title:"Setup"},r=void 0,l={id:"setup",title:"Setup",description:"Before proceeding, it is important to note that we DO NOT support Spring/Spring Boot paradigm.",source:"@site/docs/setup.md",sourceDirName:".",slug:"/setup",permalink:"/Engine-HL230/docs/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/Engine-HL230/tree/master/docs/docs/setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Setup"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Engine-HL230/docs/intro"},next:{title:"Development",permalink:"/Engine-HL230/docs/development"}},a={},d=[{value:"Prepare for Local Development",id:"prepare-for-local-development",level:2},{value:"Installing Java &amp; Maven (on Mac)",id:"installing-java--maven-on-mac",level:3},{value:"Installing Docker Engine",id:"installing-docker-engine",level:3},{value:"Getting Source Code",id:"getting-source-code",level:2},{value:"Syncing up with Engine-HL230&#39;s Code Styles with IntelliJ",id:"syncing-up-with-engine-hl230s-code-styles-with-intellij",level:3},{value:"IntelliJ Troubleshooting",id:"intellij-troubleshooting",level:4},{value:"IntelliJ Cannot READ Resource File",id:"intellij-cannot-read-resource-file",level:5},{value:"Tab Width",id:"tab-width",level:5}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["Before proceeding, it is important to note that ",(0,t.jsx)(n.strong,{children:"we DO NOT support Spring/Spring Boot paradigm"}),".\n",(0,t.jsx)(n.a,{href:"https://qubitpi.github.io/Engine-HL230/",children:"Engine HL230"})," runs as a ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://jcp.org/en/jsr/detail?id=370",children:"JAX-RS"})})," webservice backed by its reference implementation ",(0,t.jsx)(n.a,{href:"https://eclipse-ee4j.github.io/jersey.github.io/documentation/latest/index.html",children:"Jersey"})," running\nas a WAR inside ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Jetty_(web_server)",children:"Jetty"})," container."]}),(0,t.jsxs)(n.p,{children:["More info about difference between JAX-RS and Spring can be found in ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/a/42955575",children:"this thread"})]})]}),"\n",(0,t.jsxs)(n.p,{children:["This section discusses the one-time setup in order to develop ",(0,t.jsx)(n.a,{href:"https://qubitpi.github.io/Engine-HL230/",children:"Engine HL230"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"prepare-for-local-development",children:"Prepare for Local Development"}),"\n",(0,t.jsx)(n.h3,{id:"installing-java--maven-on-mac",children:"Installing Java & Maven (on Mac)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew update\nbrew install openjdk@17\n"})}),"\n",(0,t.jsx)(n.p,{children:"At the end of the last command prompt, something like the below will show up:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'For the system Java wrappers to find this JDK, symlink it with\n  sudo ln -sfn ...openjdk@17/libexec/openjdk.jdk .../JavaVirtualMachines/openjdk-17.jdk\n\nopenjdk@17 is keg-only, which means it was not symlinked into /usr/local,\nbecause this is an alternate version of another formula.\n\nIf you need to have openjdk@17 first in your PATH, run:\n  echo \'export PATH=".../openjdk@17/bin:$PATH"\' >> .../.bash_profile\n\nFor compilers to find openjdk@17 you may need to set:\n  export CPPFLAGS="-I.../openjdk@17/include"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Make sure to execute the ",(0,t.jsx)(n.code,{children:"sudo ln -sfn"}),", ",(0,t.jsx)(n.code,{children:"echo 'export PATH=..."}),", and the ",(0,t.jsx)(n.code,{children:"export CPPFLAGS="})," commands above"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["Maven uses a separate JDK version, which can be seen via ",(0,t.jsx)(n.code,{children:"mvn -v"}),". If it's not JDK 17, we should have Maven point\nto our JDK 17 using ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/a/2503679",children:"JAVA_HOME"}),":"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ /usr/libexec/java_home\n/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home\n\n$ export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"If we see something similar after typing the command with the version flag below we're good to go"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ java --version\nopenjdk 17.0.10 2021-01-19\nOpenJDK Runtime Environment (build 17.0.10+9)\nOpenJDK 64-Bit Server VM (build 17.0.10+9, mixed mode)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"installing-docker-engine",children:"Installing Docker Engine"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://qubitpi.github.io/Engine-HL230/",children:"Engine HL230"})," has ",(0,t.jsx)(n.a,{href:"https://github.com/QubitPi/Engine-HL230/blob/master/src/test/groovy/com/qubitpi/ws/jersey/template/DataServletITSpec.groovy",children:"Docker-based integration tests"}),";\nit also supports ",(0,t.jsx)(n.a,{href:"https://github.com/QubitPi/Engine-HL230/blob/master/Dockerfile",children:"running template webserivce in Docker"}),". Docker can be\ninstalled by following its ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/desktop/install/mac-install/",children:"official instructions"})]}),"\n",(0,t.jsx)(n.h2,{id:"getting-source-code",children:"Getting Source Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:QubitPi/Engine-HL230.git\ncd Engine-HL230\n"})}),"\n",(0,t.jsx)(n.h3,{id:"syncing-up-with-engine-hl230s-code-styles-with-intellij",children:"Syncing up with Engine-HL230's Code Styles with IntelliJ"}),"\n",(0,t.jsxs)(n.p,{children:["For the moment, we have distilled the most important code style conventions with respect to\nEngine-HL230's code as IntelliJ settings. If IntelliJ is used for IDE, we may import these code style\nsettings by importing the ",(0,t.jsx)(n.a,{href:"https://github.com/QubitPi/Engine-HL230/blob/master/Engine-HL230-Project-intellij-code-style.xml",children:"Engine-HL230-Project-intellij-code-style.xml"}),' file in the root\nof the repo. The setting for the project will appear as a new Scheme named "Engine-HL230-Project" under\nIDE\'s ',(0,t.jsx)(n.strong,{children:"Editor"})," -> ",(0,t.jsx)(n.strong,{children:"Code Style"})," section."]}),"\n",(0,t.jsxs)(n.p,{children:['Please also enable "remove unused imports" by ',(0,t.jsx)(n.strong,{children:"Editor"})," -> ",(0,t.jsx)(n.strong,{children:"General"})," -> ",(0,t.jsx)(n.strong,{children:"Auto Import"})," -> ",(0,t.jsx)(n.strong,{children:"Optimize Imports on the\nFly"}),", which will automatically remove unused imports."]}),"\n",(0,t.jsx)(n.h4,{id:"intellij-troubleshooting",children:"IntelliJ Troubleshooting"}),"\n",(0,t.jsx)(n.h5,{id:"intellij-cannot-read-resource-file",children:"IntelliJ Cannot READ Resource File"}),"\n",(0,t.jsx)(n.p,{children:'We sometimes see errors when we run unit tests in IntelliJ, saying "some resource file" cannot be found. We know the\npath is absolutely right. If this is the case, it\'s simply a IntelliJ issue which is solved by simply loading those\nresources explicitly by telling IntelliJ where those resources are:'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Error loading intelliJ-find-resource.png",src:i(4452).A+"",width:"2542",height:"1600"})}),"\n",(0,t.jsx)(n.h5,{id:"tab-width",children:"Tab Width"}),"\n",(0,t.jsxs)(n.p,{children:["We use 4-space as tab. This can be configured at ",(0,t.jsx)(n.strong,{children:"Code Style"})," -> ",(0,t.jsx)(n.strong,{children:"Java"})," -> ",(0,t.jsx)(n.strong,{children:"Tabs and Indents"})," with the following\nsettings:"]}),"\n",(0,t.jsx)(n.p,{children:"Tab size: 4\nIndent: 4\nContinuation indent: 8"}),"\n",(0,t.jsx)(n.p,{children:"If tabs still come out at 2 spaces when hitting TAB or Enter, not 4 spaces, try:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'"Settings | Editor | Code Style" -- try disabling "Detect and use existing file indents for editing" in case if you\nhave it enabled (it is by default). NOTE: re-opening file in editor may be required.'}),"\n",(0,t.jsx)(n.li,{children:'Do you have any .editorconfig files anywhere in the path of that file? Settings from .editorconfig\n("Settings | Editor | Code Style") have priority (will overwrite) over your IDE settings.'}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4452:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/intelliJ-find-resource-3f94d06504aac240f01fcde613894835.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(6540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);