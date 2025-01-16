"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[202],{869:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=r(4848),s=r(8453);const a={slug:"querydsl",title:"Querydsl - A Type-Safe Query Writer for Java",authors:"jiaqi",tags:["Java"]},i=void 0,o={permalink:"/Engine-HL230/blog/querydsl",editUrl:"https://github.com/QubitPi/Engine-HL230/tree/master/docs/blog/2021-07-05-querydsl.md",source:"@site/blog/2021-07-05-querydsl.md",title:"Querydsl - A Type-Safe Query Writer for Java",description:"[//]: # (Copyright 2025 Jiaqi Liu)",date:"2021-07-05T00:00:00.000Z",formattedDate:"July 5, 2021",tags:[{label:"Java",permalink:"/Engine-HL230/blog/tags/java"}],readingTime:7.28,hasTruncateMarker:!0,authors:[{name:"Jack",title:"Maintainer of Engine HL230",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"querydsl",title:"Querydsl - A Type-Safe Query Writer for Java",authors:"jiaqi",tags:["Java"]},unlisted:!1,prevItem:{title:"Understanding Weak References",permalink:"/Engine-HL230/blog/weak-references"},nextItem:{title:"Java 8 Stream",permalink:"/Engine-HL230/blog/java-stream"}},l={authorsImageUrls:[void 0]},c=[{value:"JPA",id:"jpa",level:2},{value:"Maven integration",id:"maven-integration",level:3},{value:"Querying",id:"querying",level:3},{value:"JOIN",id:"join",level:4},{value:"Quering Lucene",id:"quering-lucene",level:2},{value:"Lucene Feature Maven integration",id:"lucene-feature-maven-integration",level:3},{value:"Lucene 3",id:"lucene-3",level:4},{value:"Lucene 4",id:"lucene-4",level:4},{value:"Lucene 5",id:"lucene-5",level:4},{value:"Querying Lucene",id:"querying-lucene",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"[Oracle] &quot;not a GROUP BY expression&quot; Error",id:"oracle-not-a-group-by-expression-error",level:3},{value:"[Error] Executing an update/delete query",id:"error-executing-an-updatedelete-query",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Sponsored by ",(0,t.jsx)(n.a,{href:"http://www.mysema.com/#buzzwords",children:"Mysema"}),", ",(0,t.jsx)(n.a,{href:"https://querydsl.com/",children:"Querydsl"})," is similar to Hibernate,\nwhich offers programmable and type-safe query construction. For example"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"List<Tuple> tuples = queryFactory\n        .select(person.lastName, person.firstName, person.yearOfBirth)\n        .from(person)\n        .fetch();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Querydsl was born out of the need to maintain HQL queries in a typesafe way. Incremental construction of HQL queries\nrequires String concatenation and results in hard to read code. Unsafe references to domain types and properties via\nplain Strings were another issue with String based HQL construction."}),"\n",(0,t.jsx)(n.p,{children:"With a changing domain model type-safety brings huge benefits in software development. Domain changes are directly\nreflected in queries and autocomplete in query construction makes query construction faster and safer."}),"\n",(0,t.jsx)(n.p,{children:"HQL for Hibernate was the first target language for Querydsl, but nowadays it supports JPA, JDO, JDBC, Lucene, Hibernate\nSearch, MongoDB, Collections and RDFBean as backends."}),"\n",(0,t.jsx)(n.p,{children:"Type safety is the core principle of Querydsl. Queries are constructed based on generated query types that reflect the\nproperties of your domain types. Also function/method invocations are constructed in a fully type-safe manner."}),"\n",(0,t.jsxs)(n.p,{children:["Consistency is another important principle. The query paths and operations are the same in all implementations and also\nthe Query interfaces have a common base interface. ",(0,t.jsx)(n.strong,{children:"This means the domain types are defined only once and they will be\nready to be used against SQL, Lucene, MongoDB, etc"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"jpa",children:"JPA"}),"\n",(0,t.jsxs)(n.p,{children:["Querydsl defines a general statically typed syntax for querying on top of persisted domain model data.\n",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Java_Data_Objects",children:"JDO"})," and JPA are the primary integration technologies for Querydsl.\nThis guide describes how to use Querydsl in combination with JPA."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Querydsl for JPA is an alternative to both JPQL and Criteria queries. It combines the dynamic nature of Criteria\nqueries with the expressiveness of JPQL and all that in a fully typesafe manner"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"maven-integration",children:"Maven integration"}),"\n",(0,t.jsx)(n.p,{children:"Add the following to your Maven project:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.querydsl</groupId>\n    <artifactId>querydsl-apt</artifactId>\n    <version>${querydsl.version}</version>\n    <scope>provided</scope>\n</dependency>\n\n<dependency>\n    <groupId>com.querydsl</groupId>\n    <artifactId>querydsl-jpa</artifactId>\n    <version>${querydsl.version}</version>\n</dependency>\n\n<dependency>\n    <groupId>org.slf4j</groupId>\n    <artifactId>slf4j-log4j12</artifactId>\n    <version>1.6.1</version>\n</dependency>\n\n...\n\n<build>\n    <plugins>\n        ...\n        <plugin>\n            <groupId>com.mysema.maven</groupId>\n            <artifactId>apt-maven-plugin</artifactId>\n            <version>1.1.3</version>\n            <executions>\n                <execution>\n                    <goals>\n                        <goal>process</goal>\n                    </goals>\n                    <configuration>\n                        <outputDirectory>target/generated-sources/java</outputDirectory>\n                        <processor>com.querydsl.apt.jpa.JPAAnnotationProcessor</processor>\n                    </configuration>\n                </execution>\n            </executions>\n        </plugin>\n        ...\n    </plugins>\n</build>\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["The JPAAnnotationProcessor finds domain types annotated with the ",(0,t.jsx)(n.code,{children:"javax.persistence.Entity"})," annotation and generates\nquery types for them"]}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["If we use Hibernate annotations in our domain types we should use the APT processor of\n",(0,t.jsx)(n.code,{children:"com.querydsl.apt.hibernate.HibernateAnnotationProcessor"})," instead."]})}),"\n",(0,t.jsxs)(n.p,{children:["To generate source codes the query types, run ",(0,t.jsx)(n.code,{children:"mvn clean install"})," and you will get your Query types generated into\n",(0,t.jsx)(n.code,{children:"target/generated-sources/java"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Now you are able to construct JPA query instances and instances of the query domain model. For example, let's assume\nthat your project has the following domain type:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Entity\npublic class Customer {\n\n    private String firstName;\n    private String lastName;\n\n    public String getFirstName() {\n        return firstName;\n    }\n\n    public String getLastName() {\n        return lastName;\n    }\n\n    public void setFirstName(String fn) {\n        firstName = fn;\n    }\n\n    public void setLastName(String ln) {\n        lastName = ln;\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Querydsl will generate a query type with the simple name ",(0,t.jsx)(n.code,{children:"QCustomer"})," into the same package as ",(0,t.jsx)(n.code,{children:"Customer"}),". ",(0,t.jsx)(n.code,{children:"QCustomer"})," can\nbe used as a ",(0,t.jsx)(n.strong,{children:"statically typed variable"})," in Querydsl queries as a representative for the ",(0,t.jsx)(n.code,{children:"Customer"})," type."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"QCustomer"})," has a default instance variable which can be accessed as a static field:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"QCustomer customer = QCustomer.customer;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Alternatively you can define your own Customer variables like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'QCustomer customer = new QCustomer("myCustomer");\n'})}),"\n",(0,t.jsx)(n.h3,{id:"querying",children:"Querying"}),"\n",(0,t.jsxs)(n.p,{children:["The queries should be created via a ",(0,t.jsx)(n.code,{children:"JPAQueryFactory"})," instance."]}),"\n",(0,t.jsx)(n.p,{children:"To retrieve the customer with the first name Bob you would construct a query like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'QCustomer customer = QCustomer.customer;\nCustomer bob = queryFactory.selectFrom(customer)\n        .where(customer.firstName.eq("Bob"))\n        .fetchOne();\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note that the ",(0,t.jsx)(n.code,{children:"selectFrom"})," call defines the query source and projection"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To create a query with multiple sources you use the query like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"QCustomer customer = QCustomer.customer;\nQCompany company = QCompany.company;\nquery.from(customer, company);\n"})}),"\n",(0,t.jsx)(n.p,{children:"To use multiple filters use it like this"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'queryFactory\n        .selectFrom(customer)\n        .where(customer.firstName.eq("Bob"), customer.lastName.eq("Wilson"));\n'})}),"\n",(0,t.jsx)(n.p,{children:"Or like this"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'queryFactory\n        .selectFrom(customer)\n        .where(customer.firstName.eq("Bob").and(customer.lastName.eq("Wilson")));\n'})}),"\n",(0,t.jsx)(n.p,{children:'If you want to combine the filters via "or" then use the following pattern'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'queryFactory\n        .selectFrom(customer)\n        .where(customer.firstName.eq("Bob").or(customer.lastName.eq("Wilson")));\n'})}),"\n",(0,t.jsx)(n.h4,{id:"join",children:"JOIN"}),"\n",(0,t.jsx)(n.p,{children:"Querydsl supports the following join variants in JPQL:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"inner join"}),"\n",(0,t.jsx)(n.li,{children:"join"}),"\n",(0,t.jsx)(n.li,{children:"left join"}),"\n",(0,t.jsx)(n.li,{children:"right join."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Join is typesafe and follows the following pattern:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'QCat cat = QCat.cat;\nQCat mate = new QCat("mate");\nQCat kitten = new QCat("kitten");\nqueryFactory.selectFrom(cat)\n        .innerJoin(cat.mate, mate)\n        .leftJoin(cat.kittens, kitten)\n        .fetch()\n'})}),"\n",(0,t.jsx)(n.p,{children:"The native JPQL version of the query would be"}),"\n",(0,t.jsx)(n.p,{children:"select cat from Cat as cat\ninner join cat.mate as mate\nleft outer join cat.kittens as kitten"}),"\n",(0,t.jsx)(n.h2,{id:"quering-lucene",children:"Quering Lucene"}),"\n",(0,t.jsx)(n.h3,{id:"lucene-feature-maven-integration",children:"Lucene Feature Maven integration"}),"\n",(0,t.jsx)(n.p,{children:"Querydsl Lucene can be used via the querydsl-lucene3 module for Lucene 3, querydsl-lucene4 for Lucene 4 and\nquerydsl-lucene5 for Lucene 5"}),"\n",(0,t.jsx)(n.h4,{id:"lucene-3",children:"Lucene 3"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.querydsl</groupId>\n    <artifactId>querydsl-lucene3</artifactId>\n    <version>${querydsl.version}</version>\n</dependency>\n\n<dependency>\n    <groupId>org.slf4j</groupId>\n    <artifactId>slf4j-log4j12</artifactId>\n    <version>1.6.1</version>\n</dependency>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"lucene-4",children:"Lucene 4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.querydsl</groupId>\n    <artifactId>querydsl-lucene4</artifactId>\n    <version>${querydsl.version}</version>\n</dependency>\n\n<dependency>\n    <groupId>org.slf4j</groupId>\n    <artifactId>slf4j-log4j12</artifactId>\n    <version>1.6.1</version>\n</dependency>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"lucene-5",children:"Lucene 5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.querydsl</groupId>\n    <artifactId>querydsl-lucene5</artifactId>\n    <version>${querydsl.version}</version>\n</dependency>\n\n<dependency>\n    <groupId>org.slf4j</groupId>\n    <artifactId>slf4j-log4j12</artifactId>\n    <version>1.6.1</version>\n</dependency>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"querying-lucene",children:"Querying Lucene"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'QDocument doc = new QDocument("doc");\n\nIndexSearcher searcher = new IndexSearcher(index);\nLuceneQuery query = new LuceneQuery(true, searcher);\nList<Document> documents = query\n        .where(doc.year.between("1800", "2000").and(doc.title.startsWith("Huckle"))\n        .fetch();\n'})}),"\n",(0,t.jsx)(n.p,{children:"which is transformed into the following Lucene query:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"+year:[1800 TO 2000] +title:huckle*\n"})}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.h3,{id:"oracle-not-a-group-by-expression-error",children:'[Oracle] "not a GROUP BY expression" Error'}),"\n",(0,t.jsx)(n.p,{children:'Suppose you have a SQL query that retrieves all unique names of a "Person" table. This query works perfectly in MySQL:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT id, name\nFROM Person\nGROUP BY name\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Oracle, databases, requires all projected columns to be in ",(0,t.jsx)(n.code,{children:"GROUP BY"})," clause, i.e. the same query must be modified to\nthe following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT id, name\nFROM Person\nGROUP BY name, id\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that we've appended ",(0,t.jsx)(n.code,{children:"id"})," column in the ",(0,t.jsx)(n.code,{children:"GROUP BY"})," clause."]}),"\n",(0,t.jsxs)(n.p,{children:["Oracle, in this case, brings up an important issue for Querydsl. ",(0,t.jsx)(n.strong,{children:"How do we comply with DRY principle while maintaining\n2 copies of columns, one in projection and one in group-by clause, in the code level"}),"?"]}),"\n",(0,t.jsxs)(n.p,{children:["The answer is deduplicating by reducing the 2 copies into 1 single-source of truth and use that to re-generate\nprojections and ",(0,t.jsx)(n.code,{children:"GROUP BY"})," clause."]}),"\n",(0,t.jsx)(n.p,{children:"For example, we could define projected columns first before specifying projections and group-bys:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'/**\n * Returns an object including all of the projections for a query.\n * <p>\n * The object is a mapping from projected column to its column type.\n *\n * @return a new map\n */\n@NotNull\npublic static Map<String, Class<?>> getQueryDslProjections() {\n    return Stream.of(\n            new AbstractMap.SimpleImmutableEntry<>("id", Long.class),\n            new AbstractMap.SimpleImmutableEntry<>("name", String.class)\n    )\n            .collect(Collectors.collect(Map.Entry::getKey, Map.Entry::getValue));\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Note that in order to generate projections and group bys later, all we need is the name(display/alias) of the column\nand the field type of the Database bean, as shown above."}),"\n",(0,t.jsxs)(n.p,{children:["To generate projections, we could use ",(0,t.jsx)(n.a,{href:"https://querydsl.com/static/querydsl/4.4.0/reference/html_single/#d0e2066",children:"dynamic path"}),"\nto dynamic bind columns to our query:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'/**\n * Generate the same group-by columns as the projected columns determined by {@link #getQueryDslProjections()}\n * <p>\n * For example, if the projection is\n * <pre>\n * {@code\n * SELECT person.id, person.name FROM ...\n * }\n * </pre>\n * Then this method returns\n * <pre>\n * GROUP BY person.id, person.name\n * </pre>\n * The purpose of this method is to make Oracle-compatible GROUP-BY, which must includes all projected columns\n *\n * @param projections a mapping from path suffix and the field type of the suffix path. For example:\n * {@code id: Long.class, graph: String.class}\n *\n * @return an array of group-by columns\n */\n@NotNull\n@SuppressWarnings("SuspiciousToArrayCall")\npublic static Expression<?>[] getGroupBys(final @NotNull  Map<String, Class<?>> projections) {\n    Objects.requireNonNull(projections, "projections");\n\n    final PathBuilder<Person> root = new PathBuilder<>(Person.class, "person");\n\n    return projections.entrySet().stream()\n            .map(entry -> {\n                String property = entry.getKey();\n                Class<?> type = entry.getValue();\n                return root.get(property, type);\n            })\n            .collect(Collectors.toList()).toArray(new Expression[projections.size()]);\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For projections, we use the dynamic expression again and specify the column alias in the return result using ",(0,t.jsx)(n.code,{children:"as()"}),"\nshow below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"jpa.select(\n        Projections.bean(\n                Person.class,\n                projections\n                        .entrySet()\n                        .stream()\n                        .map(entry -> {\n                            String property = entry.getKey();\n                            Class<?> type = entry.getValue();\n                            return root.get(property, type).as(property);\n                        })\n                        .collect(Collectors.toList()).toArray(new Expression[projections.size()])\n                )\n        )\n                .from(qPerson)\n                .leftJoin...;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"error-executing-an-updatedelete-query",children:"[Error] Executing an update/delete query"}),"\n",(0,t.jsx)(n.p,{children:"In order to translate this query in QueryDsl:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"update myThings set firstColumn = 'newValue' where secondColumn in ('interesting', 'stuff')\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We have to use ",(0,t.jsx)(n.code,{children:"new JPAUpdateClause(session, myThings)"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'JPAUpdateClause<myThings> update = new JPAUpdateClause(session, myThings);\nupdate.set(myThings.firstColumn, "newValue")\n        .where(myThings.secondColumn.in(interestingValues))\n        .execute();\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(6540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);