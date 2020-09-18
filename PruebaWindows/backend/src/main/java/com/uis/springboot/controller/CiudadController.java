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
	public List<Ciudad> getAllDocumentos(){
		return ciudadRepository.findAll();
	}		
	
	// create employee rest api
	@PostMapping("/ciudades")

	public Ciudad createTipoDocumento(@RequestBody Ciudad tipoDocumento) {
		return ciudadRepository.save(tipoDocumento);
	}
	
	// get employee by id rest api
	@GetMapping("/ciudades/{id}")
	public ResponseEntity<Ciudad> getTipoDocumentoById(@PathVariable Long id) {
		Ciudad ciudad = ciudadRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("La tipoDocumento con id no existe :" + id));
		return ResponseEntity.ok(ciudad);
	}
	
	// update employee rest api
	
	@PutMapping("/ciudades/{id}")
	public ResponseEntity<Ciudad> updateTipoDocumento(@PathVariable Long id, @RequestBody Ciudad tipoDocumentoDetails){
		Ciudad tipoDocumento = ciudadRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("La persona con id no existe :" + id));
		
		tipoDocumento.setNombre(tipoDocumentoDetails.getNombre());
		tipoDocumento.setDescripcion(tipoDocumentoDetails.getDescripcion());

		Ciudad updatedPersona = ciudadRepository.save(tipoDocumento);
		return ResponseEntity.ok(updatedPersona);
	}
	
	// delete employee rest api
	@DeleteMapping("/ciudades/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteTipoDocumento(@PathVariable Long id){
		Ciudad tipoDocumento = ciudadRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ciudad con id no existe :" + id));

		ciudadRepository.delete(tipoDocumento);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
