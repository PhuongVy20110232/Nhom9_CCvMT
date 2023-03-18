package com.doan.server.models;

import com.doan.server.models.Person;

import junit.framework.TestCase;

public class TestPerson extends TestCase {
    public TestPerson(String name) {
        super(name);
    }

    public void testGetFullName() {
        Person p = new Person("Pham", "Tiens");
        assertEquals("Pham    Tiens", p.getFullName());
    }
}