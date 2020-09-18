package com.uis.springboot.controller;

import com.uis.springboot.exception.ResourceNotFoundException;
import com.uis.springboot.model.TipoDocumento;
import com.uis.springboot.repository.TipoDocumentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class TipoDocumentoController {

	@Autowired
	private TipoDocumentoRepository tipoDocumentoRepository;
	
	// get all employees
	@GetMapping("/tiposdocumento")
	public List<TipoDocumento> getAllTiposDocumento(){
		return tipoDocumentoRepository.findAll();
	}		
	
	// create employee rest api
	@PostMapping("/tiposdocumento")

	public TipoDocumento createTipoDocumento(@RequestBody TipoDocumento tipoDocumento) {
		return tipoDocumentoRepository.save(tipoDocumento);
	}
	
	// get employee by id rest api
	@GetMapping("/tiposdocumento/{id}")
	public ResponseEntity<TipoDocumento> getTipoDocumentoById(@PathVariable Long id) {
		TipoDocumento tipoDocumento = tipoDocumentoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("El tipoDocumento con id no existe :" + id));
		return ResponseEntity.ok(tipoDocumento);
	}
	
	// update employee rest api
	
	@PutMapping("/tiposdocumento/{id}")
	public ResponseEntity<TipoDocumento> updateTipoDocumento(@PathVariable Long id, @RequestBody TipoDocumento tipoDocumentoDetails){
		TipoDocumento tipoDocumento = tipoDocumentoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("El tipoDocumento con id no existe :" + id));
		
		tipoDocumento.setNombre(tipoDocumentoDetails.getNombre());
		tipoDocumento.setDescripcion(tipoDocumentoDetails.getDescripcion());

		TipoDocumento updatedPersona = tipoDocumentoRepository.save(tipoDocumento);
		return ResponseEntity.ok(updatedPersona);
	}
	
	// delete employee rest api
	@DeleteMapping("/tiposdocumento/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteTipoDocumento(@PathVariable Long id){
		TipoDocumento tipoDocumento = tipoDocumentoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("El tipoDocumento con id no existe :" + id));
		
		tipoDocumentoRepository.delete(tipoDocumento);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
