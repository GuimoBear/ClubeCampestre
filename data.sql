INSERT INTO users(id, username, password)
VALUES (nextval('user_seq'), 'joana', '$2a$10$59w0SxfgsrbePZnPsNoqheAvprvpt5kQK.z5oOyGxEYyaFh18OsF6'/*master*/),
       (nextval('user_seq'), 'vanderley', '$2a$10$o352y46wUcO2D1LtzZbFcu.p7VhHuE0gGd6uKArIvNj8Gmr/PNY.a'/*251200*/),
       (nextval('user_seq'), 'root', '$2a$10$7D3pBTzZTzMq5ceJtOuzEOmwLKJ2VwA3vgWXg9nMBT6OG3qINQV6.'/*clubecamp@12*/)