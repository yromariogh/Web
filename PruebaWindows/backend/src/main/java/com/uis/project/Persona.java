package com.uis.project;

import java.sql.Date;
import javax.persistence.*;

@Entity
@Table(name = "personas")
public class Persona {
    
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String nombres;
    @Column 
    private String apellidos;
    @Column
    private int documento;
    @Column 
    private Date fechaNacimiento;
    @Column 
    private String email;
    @Column
    private int telefono;
    @Column 
    private String usuario;
    @Column 
    private String password;
    @Column
    private int lugarResidencia_id;
    @Column 
    private int tipoDocumento_id;

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

    public int getLugarResidencia_id() {
        return lugarResidencia_id;
    }

    public void setLugarResidencia_id(int lugarResidencia_id) {
        this.lugarResidencia_id = lugarResidencia_id;
    }

    public int getTipoDocumento_id() {
        return tipoDocumento_id;
    }

    public void setTipoDocumento_id(int tipoDocumento_id) {
        this.tipoDocumento_id = tipoDocumento_id;
    }
    
    
}