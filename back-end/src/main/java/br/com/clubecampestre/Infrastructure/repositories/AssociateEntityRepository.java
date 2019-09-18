package br.com.clubecampestre.Infrastructure.repositories;

import br.com.clubecampestre.domain.entities.AssociateEntity;
import br.com.clubecampestre.domain.valueobjects.AssociateTypeEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface AssociateEntityRepository extends JpaRepository<AssociateEntity, Integer> {
    public AssociateEntity findByCpf(String CPF);
    public AssociateEntity findByRg(String RG);
    public Collection<AssociateEntity> findByNameStartingWith(String name);
    public Collection<AssociateEntity> findByAssociateType(AssociateTypeEnum associateType);
    public Collection<AssociateEntity> findBySponsorAndAssociateType(AssociateEntity sponsor, AssociateTypeEnum associateType);
}
