package com.uis.springboot.model;



import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;


@Entity
@Table(name = "personas")
public class Persona {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "persona_id")
	private long id;

	@Column(name = "nombres")
	private String nombres;

	@Column(name = "apellidos")
	private String apellidos;

	@Column(name = "documento")
	private int documento;

	@Column(name = "fechanacimiento")
	private Date fechaNacimiento;

	@Column(name = "email")
	private String email;

	@Column(name = "telefono")
	private int telefono;

	@Column(name = "usuario")
	private String usuario;

	@Column(name = "password")
	private String password;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(unique = true)
	@JsonIgnore
	private TipoDocumento tipodocumento_id;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(unique = true)
	@JsonIgnore
	private Ciudad lugarresidencia_id;

	public Persona() {}

	public Persona(String nombres, String apellidos, int documento, Date fechaNacimiento, String email, int telefono, String usuario, String password, TipoDocumento tipodocumento_id, Ciudad lugarresidencia_id) {
		this.nombres = nombres;
		this.apellidos = apellidos;
		this.documento = documento;
		this.fechaNacimiento = fechaNacimiento;
		this.email = email;
		this.telefono = telefono;
		this.usuario = usuario;
		this.password = password;
		this.tipodocumento_id = tipodocumento_id;
		this.lugarresidencia_id = lugarresidencia_id;
	}

	public long getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public int getDocumento() {
		return documento;
	}

	public void setDocumento(int documento) {
		this.documento = documento;
	}

	public Date getFechaNacimiento() {
		return fechaNacimiento;
	}

	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getTelefono() {
		return telefono;
	}

	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public Ciudad getLugarResidencia_id() {
		return lugarresidencia_id;
	}

	public void setLugarResidencia_id(Ciudad lugarResidencia_id) {
		this.lugarresidencia_id = lugarResidencia_id;
	}

	public TipoDocumento getTipoDocumento_id() {
		return tipodocumento_id;
	}

	public void setTipoDocumento_id(TipoDocumento tipoDocumento_id) {
		this.tipodocumento_id = tipoDocumento_id;
	}
}
