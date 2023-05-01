CREATE TABLE user(  
    id INT NOT NULL primary key AUTO_INCREMENT,
    create_time DATETIME,
    update_time DATETIME null,
    username VARCHAR(255) not null,
    password VARCHAR(255)
);

CREATE TABLE candidate_profile(  
    id INT NOT NULL primary key AUTO_INCREMENT,
    create_time DATETIME,
    update_time DATETIME null,
    firstname VARCHAR(255) not null,
    lastname VARCHAR(255) not null,
    job_title VARCHAR(255) not null,
    note TEXT null,
    cv_path VARCHAR(255),
    user_id INT NOT NULL,
    constraint candidate_profile_ibfk_1 foreign key (user_id) references user (id)
);