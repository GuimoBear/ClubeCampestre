package br.com.clubecampestre.controllers;

import br.com.clubecampestre.domain.entities.AssociateEntity;
import br.com.clubecampestre.domain.services.AssociateService;
import br.com.clubecampestre.domain.valueobjects.EntityNotValidException;
import br.com.clubecampestre.factories.AssociateViewModelFactory;
import br.com.clubecampestre.viewmodels.AssociateViewModel;
import br.com.clubecampestre.viewmodels.ResponseDefaultMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.Collection;

@RestController
@RequestMapping("/associate")
public class AssociateController {

    @Autowired
    private AssociateService service;

    @Autowired
    private AssociateViewModelFactory factory;

    @GetMapping
    public Collection<AssociateViewModel> getAssociates() {
        return factory.toViewModels(service.all());
    }

    @GetMapping("/{id}")
    public AssociateViewModel getAssociate(@PathVariable int id) {
        return factory.toViewModel(service.findById(id));
    }

    @PostMapping
    public ResponseDefaultMessage add(@RequestBody AssociateViewModel associateViewModel) {
        try {
            AssociateEntity associate = associateViewModel.toDomainEntity();
            if(associateViewModel.getSponsorId() > 0) {
                associate.setSponsor(service.findById(associateViewModel.getSponsorId()));
            }
            service.add(associate);
        } catch(EntityNotValidException ex) {
            return ResponseDefaultMessage.Invalid(ex);
        } catch (Exception ex) {
            return ResponseDefaultMessage.Error("Ocorreu um erro ao inserir o novo associado: " + ex.getMessage());
        }
        return ResponseDefaultMessage.Success();
    }

    @PutMapping
    public ResponseDefaultMessage update(@RequestBody AssociateViewModel associateViewModel) {
        try {
            AssociateEntity associate = associateViewModel.toDomainEntity();
            if(associateViewModel.getSponsorId() > 0) {
                associate.setSponsor(service.findById(associateViewModel.getSponsorId()));
            }
            service.update(associate);
        } catch(EntityNotValidException ex) {
            return ResponseDefaultMessage.Invalid(ex);
        } catch (Exception ex) {
            return ResponseDefaultMessage.Error("Ocorreu um erro ao alterar o associado: " + ex.getMessage());
        }
        return ResponseDefaultMessage.Success();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        service.delete(id);
    }

}
