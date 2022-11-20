INSERT INTO user_informations (identification, password, name, email)
VALUES ('admin', 'selettadmin', 'admin', 'admin@pukyong.ac.kr');

INSERT INTO educations (name, major, degree, admission_date, graduation_date, major_grade, major_course, grade,
                        max_grade, course, user_id)
VALUES ('부경대학교', '컴퓨터공학과 인공지능 소프트웨어 전공', '학사', DATE_FORMAT(now(), '%Y-%m-%d'), DATE_FORMAT(now(), '%Y-%m-%d'), 1.2, 96,
        1.2, 4.5, 132, 1);

INSERT INTO licenses (title, date, description, user_id)
VALUES ('정보처리기사 1급', DATE_FORMAT(now(), '%Y-%m-%d'), 'test', 1);

INSERT INTO language_skills (title, grade, user_id)
VALUES ('TOEIC', '990', 1);

INSERT INTO awards (title, date, organization, grade, description, user_id)
VALUES ('부경대학교 프로그래밍 대회', '2022-01-01', '부경대학교 정보융합대학', '장려상', '장려상임', 1);