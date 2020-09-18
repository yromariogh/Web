package com.uis.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.uis.springboot.exception.ResourceNotFoundException;
import com.uis.springboot.model.Persona;
import com.uis.springboot.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
@Controller("/personas")
public class PersonaController {

	@Autowired
	private PersonaRepository personaRepository;
	
	// get all employees
	@GetMapping("/personas")
	public List<Persona> getAllEmployees(){
		return personaRepository.findAll();
	}		
	
	// create employee rest api
	@PostMapping("/personas")

	public Persona createPersona(@RequestBody Persona persona) {
		return personaRepository.save(persona);
	}
	
	// get employee by id rest api
	@GetMapping("/personas/{id}")
	public ResponseEntity<Persona> getPersonaById(@PathVariable Long id) {
		Persona persona = personaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("La persona con id no existe :" + id));
		return ResponseEntity.ok(persona);
	}
	
	// update employee rest api
	
	@PutMapping("/personas/{id}")
	public ResponseEntity<Persona> updatePersona(@PathVariable Long id, @RequestBody Persona personaDetails){
		Persona persona = personaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("La persona con id no existe :" + id));
		
		persona.setNombres(personaDetails.getNombres());
		persona.setApellidos(personaDetails.getApellidos());
		persona.setDocumento(personaDetails.getDocumento());
		persona.setEmail(personaDetails.getEmail());
		persona.setFechaNacimiento(personaDetails.getFechaNacimiento());
		persona.setLugarResidencia_id(personaDetails.getLugarResidencia_id());
		persona.setTelefono(personaDetails.getTelefono());
		persona.setUsuario(personaDetails.getUsuario());
		persona.setPassword(personaDetails.getPassword());
		persona.setTipoDocumento_id(personaDetails.getTipoDocumento_id());

		Persona updatedPersona = personaRepository.save(persona);
		return ResponseEntity.ok(updatedPersona);
	}
	
	// delete employee rest api
	@DeleteMapping("/personas/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePersona(@PathVariable Long id){
		Persona persona = personaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Persona con id no existe :" + id));
		
		personaRepository.delete(persona);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
