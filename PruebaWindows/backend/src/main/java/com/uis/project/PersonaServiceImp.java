package com.uis.project;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaServiceImp implements PersonaService{
    @Autowired
    private PersonaRepositorio repositorio;
    
    @Override
    public List<Persona> listar() {
        return repositorio.findAll();
    }

    @Override
    public Persona listarId(long id) {
        Optional<com.uis.project.Persona> optionalPersona = repositorio.findById(id);

        return optionalPersona.get();
    }

    @Override
    public Persona add(Persona p) {
        return repositorio.save(p);
    }

    @Override
    public Persona edit(Persona p) {
        return repositorio.save(p);
    }

    @Override
    public Persona delete(long id) {
        Optional<com.uis.project.Persona> optionalPersona = repositorio.findById(id);

        Persona p= optionalPersona.get();

        if(p!=null){
            repositorio.delete(p);
        }
       return p;
    }
}
