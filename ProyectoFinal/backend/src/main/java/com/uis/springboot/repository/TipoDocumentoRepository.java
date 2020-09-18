package com.uis.springboot.repository;

import com.uis.springboot.model.TipoDocumento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TipoDocumentoRepository extends JpaRepository<TipoDocumento, Long>{

}
