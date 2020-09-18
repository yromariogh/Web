package com.uis.springboot.model;

import javax.persistence.*;

@Entity
@Table(name = "ciudades")
public class Ciudad {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ciudades_id")
	private long id;

	@OneToOne(mappedBy = "lugarResidencia_id")
	private Persona persona;

	@Column(name = "Nombre")
	private String nombre;



	@Column(name = "Descripcion")
	private String descripcion;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
}
