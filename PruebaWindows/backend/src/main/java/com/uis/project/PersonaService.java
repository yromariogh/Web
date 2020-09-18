package com.uis.project;

import java.util.List;

public interface PersonaService {
    List<Persona>listar();
    Persona listarId(long id);
    Persona add(Persona p);
    Persona edit(Persona p);
    Persona delete(long id);
}
