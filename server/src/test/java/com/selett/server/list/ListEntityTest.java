package com.selett.server.list;

import com.selett.server.repository.ListRepository;
import com.selett.server.repository.UserInfoRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ListEntityTest {

    @Autowired
    private ListRepository listRepository;

    @Test
    public void searchAll() {
        listRepository.findAll().forEach(System.out::println);
    }
}
