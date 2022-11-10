INSERT INTO user_informations (identification, password, name, email)
VALUES ('admin', 'selettadmin', 'admin', 'admin@pukyong.ac.kr');

INSERT INTO lists (title, prev, next, user_id)
VALUES ('admin test', 0, 2, 1);

INSERT INTO lists (title, prev, next, user_id)
VALUES ('네이버', 1, 3, 1);

INSERT INTO lists (title, prev, next, user_id)
VALUES ('카카오', 2, 0, 1);

INSERT INTO cover_letters (title, question, question_lock, description, description_lock, prev, next, list_id)
VALUES ('1번 문항', '왜 지원했나요', TRUE, '돈 많이주니까', FALSE, 0, 2, 1);

INSERT INTO cover_letters (title, question, question_lock, description, description_lock, prev, next, list_id)
VALUES ('2번 문항', '와서 뭐할거야', FALSE, '일단 시켜줘', TRUE, 1, 0, 1);

INSERT INTO cover_letters (title, question, question_lock, description, description_lock, prev, next, list_id)
VALUES ('1번 문항', '네이버 가고 싶어요', TRUE, '이게 내용임', TRUE, 0, 0, 2);

INSERT INTO cover_letters (title, question, question_lock, description, description_lock, prev, next, list_id)
VALUES ('새 자기소개서', '질문', FALSE, 'KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAOAAAAAAAAAAAAAKOAAAAAAAAAAAAKOA', FALSE, 0,
        0, 3);

INSERT INTO educations (name, major, degree, admission_date, graduation_date, major_grade, major_course, grade,
                        max_grade, course, user_id)
VALUES ('부경대학교', '컴퓨터공학과 인공지능 소프트웨어 전공', '학사', DATE_FORMAT(now(), '%Y-%m-%d'), DATE_FORMAT(now(), '%Y-%m-%d'), 1.2, 96,
        1.2, 4.5, 132, 1);

INSERT INTO licenses (title, date, description, user_id)
VALUES ('정보처리기사 1급', DATE_FORMAT(now(), '%Y-%m-%d'), 'test', 1);

INSERT INTO language_skills (title, grade, user_id)
VALUES ('TOEIC', '990', 1);