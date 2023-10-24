CREATE TABLE `test_db`.`accounts` (
    `id`                      BIGINT           NOT NULL       AUTO_INCREMENT,
    `birthday`                varchar(255)     DEFAULT NULL,
    `id_name`                 varchar(255)     DEFAULT NULL,
    `name`                    varchar(255)     DEFAULT NULL,
    `email`                   varchar(255)     DEFAULT NULL,
    `tel`                     varchar(255)     DEFAULT "未設定",
    `gender`                  varchar(255)     DEFAULT NULL,
    `address_1`               varchar(255)     DEFAULT "未設定",
    `address_2`               varchar(255)     DEFAULT "未設定",
    `password`                varchar(255)     DEFAULT NULL,
    `login_status`            INTEGER          DEFAULT 0,
    `certification_flag`      INTEGER          DEFAULT 0,
    `publish_email`           INTEGER          DEFAULT 0,
    `publish_tel`             INTEGER          DEFAULT 0,
    `question`                varchar(255)     DEFAULT NULL,
    `answer`                  varchar(255)     DEFAULT NULL,
    `one_time_code`           varchar(255)     DEFAULT NULL,
    `update_image_name`       varchar(255)     DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;

CREATE TABLE `test_db`.`bullentin_board`(
    `id`        BIGINT          NOT NULL    AUTO_INCREMENT,
    `user_id`   BIGINT          NOT NULL,
    `text`      varchar(255)    NOT NULL,
    `date`      TIMESTAMP       NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`)  REFERENCES `test_db`.`accounts` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;


CREATE TABLE `test_db`.`favorite_list`(
    `id`        BIGINT          NOT NULL,
    `list_id`   BIGINT          NOT NULL,
    FOREIGN KEY (`id`)  REFERENCES `test_db`.`accounts` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE `test_db`.`chat` (
    `room_no`              BIGINT          NOT NULL,
    `account_id`           BIGINT          NOT NULL,
    `to_id`                BIGINT          NOT NULL,
    `message`              varchar(2000)   NOT NULL,
    `send_date`            TIMESTAMP       NOT NULL,
    `time`                 varchar(255)    NOT NULL,
    `open`                 INTEGER         DEFAULT 0,
    FOREIGN KEY (`account_id`)  REFERENCES `test_db`.`accounts` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE `test_db`.`chat_room` (
    `room_no`              BIGINT          NOT NULL,
    `account_id`           BIGINT          NOT NULL,
    `from_id`              BIGINT          NOT NULL,
    FOREIGN KEY (`account_id`)  REFERENCES `test_db`.`accounts` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

