package com.uis.springboot.model;

import javax.persistence.*;

@Entity
@Table(name = "tiposdocumento")
public class TipoDocumento{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tiposdocumento_id")
	private long id;

	@OneToOne(mappedBy = "tipoDocumento_id")
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
