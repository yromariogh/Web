package com.uis.springboot.model;

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

	@Column(name = "tipodocumento")
	private String tipoDocumento;

	@Column(name = "documento")
	private String documento;

	@Column(name = "ciudad")
	private String ciudad;

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



	public Persona() {}

	public Persona(String nombres, String apellidos, String tipodocumento, String documento, String ciudad, Date fechaNacimiento, String email, int telefono, String usuario, String password) {
		this.nombres = nombres;
		this.apellidos = apellidos;
		this.tipoDocumento = tipoDocumento;
		this.documento = documento;
		this.ciudad = ciudad;
		this.fechaNacimiento = fechaNacimiento;
		this.email = email;
		this.telefono = telefono;
		this.usuario = usuario;
		this.password = password;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
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

	public String getTipoDocumento() {
		return tipoDocumento;
	}

	public void setTipoDocumento(String tipoDocumento) {
		this.tipoDocumento = tipoDocumento;
	}

	public String getDocumento() {
		return documento;
	}

	public void setDocumento(String documento) {
		this.documento = documento;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
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
}
