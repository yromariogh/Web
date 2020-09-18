package com.uis.springboot.repository;

import com.uis.springboot.model.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CiudadRepository extends JpaRepository<Ciudad, Long>{

}
