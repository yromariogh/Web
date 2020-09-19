package com.uis.springboot.controller;

import com.uis.springboot.exception.ResourceNotFoundException;
import com.uis.springboot.model.Ciudad;
import com.uis.springboot.repository.CiudadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class CiudadController {

	@Autowired
	private CiudadRepository ciudadRepository;
	
	// get all employees
	@GetMapping("/ciudades")
	public List<Ciudad> getAllCiudades(){
		return ciudadRepository.findAll();
	}		
	
	// create employee rest api
	@PostMapping("/ciudades")

	public Ciudad createCiudad(@RequestBody Ciudad ciudad) {
		return ciudadRepository.save(ciudad);
	}
	
	// get employee by id rest api
	@GetMapping("/ciudades/{id}")
	public ResponseEntity<Ciudad> getCiudadById(@PathVariable Long id) {
		Ciudad ciudad = ciudadRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("La ciudad con id no existe :" + id));
		return ResponseEntity.ok(ciudad);
	}
	
	// update employee rest api
	
	@PutMapping("/ciudades/{id}")
	public ResponseEntity<Ciudad> updateCiudad(@PathVariable Long id, @RequestBody Ciudad ciudadDetails){
		Ciudad ciudad = ciudadRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("La persona con id no existe :" + id));
		
		ciudad.setNombre(ciudadDetails.getNombre());
		ciudad.setDescripcion(ciudadDetails.getDescripcion());

		Ciudad updatedPersona = ciudadRepository.save(ciudad);
		return ResponseEntity.ok(updatedPersona);
	}
	
	// delete employee rest api
	@DeleteMapping("/ciudades/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCiudad(@PathVariable Long id){
		Ciudad ciudad = ciudadRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ciudad con id no existe :" + id));

		ciudadRepository.delete(ciudad);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
