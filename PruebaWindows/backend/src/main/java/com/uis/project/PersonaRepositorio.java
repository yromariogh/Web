/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.uis.project;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonaRepositorio extends JpaRepository<Persona, Long>{
    List<Persona>findAll();
    Persona listarId(long id);
    Persona save(Persona p);
    void delete(Persona p);
}
