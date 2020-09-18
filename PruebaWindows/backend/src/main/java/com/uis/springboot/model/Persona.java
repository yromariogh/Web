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

	@Column(name = "Nombres")
	private String nombres;

	@Column(name = "Apellidos")
	private String apellidos;

	@Column(name = "Documento")
	private int documento;

	@Column(name = "FechaNacimiento")
	private Date fechaNacimiento;

	@Column(name = "Email")
	private String email;

	@Column(name = "Telefono")
	private int telefono;

	@Column(name = "Usuario")
	private String usuario;

	@Column(name = "Password")
	private String password;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(unique = true)
	private TipoDocumento tipoDocumento_id;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(unique = true)
	private Ciudad lugarResidencia_id;




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
		return lugarResidencia_id;
	}

	public void setLugarResidencia_id(Ciudad lugarResidencia_id) {
		this.lugarResidencia_id = lugarResidencia_id;
	}

	public TipoDocumento getTipoDocumento_id() {
		return tipoDocumento_id;
	}

	public void setTipoDocumento_id(TipoDocumento tipoDocumento_id) {
		this.tipoDocumento_id = tipoDocumento_id;
	}
}
