-- Copyright 2024 Jiaqi Liu
--
-- Licensed under the Apache License, Version 2.0 (the "License");
-- you may not use this file except in compliance with the License.
-- You may obtain a copy of the License at
--
--     http://www.apache.org/licenses/LICENSE-2.0
--
-- Unless required by applicable law or agreed to in writing, software
-- distributed under the License is distributed on an "AS IS" BASIS,
-- WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
-- See the License for the specific language governing permissions and
-- limitations under the License.

-- Define Schemas
CREATE TABLE VIDEO_META_DATA (
    id        BIGINT NOT NULL generated always as identity ( start with 1, increment by 1 ),
    file_id   VARCHAR(255) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_type VARCHAR(8)   NOT NULL,
    PRIMARY KEY (id)
);

-- Predefined test data
INSERT INTO VIDEO_META_DATA (file_id, file_name, file_type) VALUES ('1', 'Generation War', 'MP4');
INSERT INTO VIDEO_META_DATA (file_id, file_name, file_type) VALUES ('2', 'The Mummy', 'MP4');
INSERT INTO VIDEO_META_DATA (file_id, file_name, file_type) VALUES ('3', 'The Mummy Returns', 'MP4');
