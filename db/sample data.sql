INSERT INTO user_informations (identification, password, name, email)
VALUES ('admin', 'selettadmin', 'admin', 'admin@pukyong.ac.kr');

INSERT INTO lists (title, position, user_id)
VALUES ('admin test', 1, 1);

INSERT INTO cover_letters (title, title_lock, description, description_lock, position, list_id)
VALUES ('왜 지원했을까?', TRUE, '돈 많이주니까', FALSE, 1, 1);

INSERT INTO educations (name, major, degree, admission_date, graduation_date, major_grade, major_course, grade,
                        max_grade, course, position, user_id)
VALUES ('부경대학교', '컴퓨터공학과 인공지능 소프트웨어 전공', '학사', DATE_FORMAT(now(), '%Y-%m-%d'), DATE_FORMAT(now(), '%Y-%m-%d'), 1.2, 96,
        1.2, 4.5, 132, 1, 1);

INSERT INTO licenses (title, date, description, position, user_id)
VALUES ('정보처리기사 1급', DATE_FORMAT(now(), '%Y-%m-%d'), 'test', 1, 1);

INSERT INTO language_skills (title, grade, position, user_id)
VALUES ('TOEIC', '990', 1, 1);