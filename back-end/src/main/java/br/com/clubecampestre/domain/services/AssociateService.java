package br.com.clubecampestre.domain.services;

import br.com.clubecampestre.Infrastructure.repositories.AssociateEntityRepository;
import br.com.clubecampestre.domain.entities.AssociateEntity;
import br.com.clubecampestre.domain.valueobjects.AssociateFilter;
import br.com.clubecampestre.domain.valueobjects.AssociateTypeEnum;
import br.com.clubecampestre.domain.valueobjects.EntityNotValidException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.Collection;

@Service
public class AssociateService {

    @Autowired
    private AssociateEntityRepository repository;

    public void add(AssociateEntity entity) throws EntityNotValidException, Exception {
        if(!entity.isValid()) {
            throw new EntityNotValidException(entity.getErrors());
        }
        entity.setId(0);
        try {
            repository.saveAndFlush(entity);
        } catch (Exception ex) {
            throw new Exception("Ocorreu um erro ao salvar o associado: " + ex.getMessage(), ex);
        }
    }

    public void update(AssociateEntity entity) throws EntityNotValidException, EntityNotFoundException {
        if(!entity.isValid()) {
            throw new EntityNotValidException(entity.getErrors());
        }
        if(entity.getId() <= 0) {
            throw  new EntityNotFoundException();
        }
        try {
            repository.saveAndFlush(entity);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public Collection<AssociateEntity> all() {
        return repository.findAll();
    }

    public AssociateEntity findById(int id) {
        return repository.getOne(id);
    }

    public Collection<AssociateEntity> findDependents(AssociateEntity sponsor) {
        return repository.findBySponsorAndAssociateType(sponsor, AssociateTypeEnum.DEPENDENT);
    }

    public Collection<AssociateEntity> findDependents(int sponsorId) {
        AssociateEntity sponsor = findById(sponsorId);
        return repository.findBySponsorAndAssociateType(sponsor, AssociateTypeEnum.DEPENDENT);
    }

    public Collection<AssociateEntity> filter(AssociateFilter filter) {
        if(filter.hasCPFFilter()) {
            ArrayList<AssociateEntity> list = new ArrayList<>();
            AssociateEntity entity = repository.findByCpf(filter.getCPF());
            if(entity != null) {
                list.add(entity);
            }
            return list;
        } else if(filter.hasRGFilter()) {
            ArrayList<AssociateEntity> list = new ArrayList<>();
            AssociateEntity entity = repository.findByRg(filter.getRG());
            if(entity != null) {
                list.add(entity);
            }
            return list;
        } else if (filter.hasNameFilter()) {
            return repository.findByNameStartingWith(filter.getName());
        } else if (filter.hasAssociatedTypeFilter()) {
            return repository.findByAssociateType(filter.getAssociateType());
        }
        return repository.findAll();
    }

    public void delete(int associateId) {
        delete(findById(associateId));
    }

    public void delete(AssociateEntity entity) {
        repository.delete(entity);
    }
}
