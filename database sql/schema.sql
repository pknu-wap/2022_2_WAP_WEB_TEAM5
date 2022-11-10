CREATE TABLE user_informations
(
    user_id        INT         NOT NULL AUTO_INCREMENT,
    identification VARCHAR(20) NOT NULL,
    password       VARCHAR(20) NOT NULL,
    name           VARCHAR(20) NOT NULL,
    email          VARCHAR(50) NOT NULL,
    PRIMARY KEY (user_id)
) CHARSET = utf8;

CREATE TABLE lists
(
    list_id INT NOT NULL AUTO_INCREMENT,
    title   TINYTEXT,
    prev    INT NOT NULL,
    next    INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (list_id),
    FOREIGN KEY (user_id)
        REFERENCES user_informations (user_id)
        ON DELETE CASCADE
) CHARSET = utf8;

CREATE TABLE cover_letters
(
    id               INT  NOT NULL AUTO_INCREMENT,
    title            TINYTEXT,
    question         TINYTEXT,
    question_lock    BOOL NOT NULL,
    description      TEXT,
    description_lock BOOL NOT NULL,
    prev             INT  NOT NULL,
    next             INT  NOT NULL,
    list_id          INT  NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (list_id)
        REFERENCES lists (list_id)
        ON DELETE CASCADE
) CHARSET = utf8;

CREATE TABLE educations
(
    id              INT         NOT NULL AUTO_INCREMENT,
    name            VARCHAR(50) NOT NULL,
    major           VARCHAR(50) NOT NULL,
    degree          VARCHAR(20) NOT NULL,
    admission_date  DATE        NOT NULL,
    graduation_date DATE        NOT NULL,
    major_grade     FLOAT,
    major_course    INT,
    grade           FLOAT,
    max_grade       FLOAT,
    course          INT,
    user_id         INT         NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
        REFERENCES user_informations (user_id)
        ON DELETE CASCADE
) CHARSET = utf8;

CREATE TABLE licenses
(
    id          INT      NOT NULL AUTO_INCREMENT,
    title       TINYTEXT NOT NULL,
    date        DATE     NOT NULL,
    description TEXT,
    user_id     INT      NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
        REFERENCES user_informations (user_id)
        ON DELETE CASCADE
) CHARSET = utf8;

CREATE TABLE awards
(
    id           INT         NOT NULL AUTO_INCREMENT,
    title        TINYTEXT    NOT NULL,
    date         DATE        NOT NULL,
    organization VARCHAR(50) NOT NULL,
    grade        VARCHAR(20) NOT NULL,
    description  TEXT,
    user_id      INT         NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
        REFERENCES user_informations (user_id)
        ON DELETE CASCADE
) CHARSET = utf8;

CREATE TABLE language_skills
(
    id      INT         NOT NULL AUTO_INCREMENT,
    title   TINYTEXT    NOT NULL,
    grade   VARCHAR(20) NOT NULL,
    user_id INT         NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
        REFERENCES user_informations (user_id)
        ON DELETE CASCADE
) CHARSET = utf8;

CREATE TABLE memos
(
    id          INT NOT NULL AUTO_INCREMENT,
    description TEXT,
    user_id     INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
        REFERENCES user_informations (user_id)
        ON DELETE CASCADE
) CHARSET = utf8;