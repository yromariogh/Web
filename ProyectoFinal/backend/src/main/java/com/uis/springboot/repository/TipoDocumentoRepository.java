package com.uis.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TipoDocumentoRepository extends JpaRepository<TipoDocumento, Long>{

}
