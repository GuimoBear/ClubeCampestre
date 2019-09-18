package br.com.clubecampestre.factories;

import br.com.clubecampestre.domain.entities.AssociateEntity;
import br.com.clubecampestre.domain.services.AssociateService;
import br.com.clubecampestre.domain.valueobjects.AssociateTypeEnum;
import br.com.clubecampestre.viewmodels.AssociateViewModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;

@Component
public class AssociateViewModelFactory {

    @Autowired
    private AssociateService service;

    public AssociateViewModel toViewModel(AssociateEntity associate) {
        AssociateViewModel viewModel = AssociateViewModel.fromDomainEntity(associate);
        if (associate.getAssociateType().equals(AssociateTypeEnum.SPONSOR)) {
            ArrayList<AssociateViewModel> dependents = new ArrayList<>();
            for (AssociateEntity dependent: service.findDependents(associate)) {
                dependents.add(AssociateViewModel.fromDomainEntity(dependent));
            }
            viewModel.setDependents(dependents);
        }
        return viewModel;
    }

    public Collection<AssociateViewModel> toViewModels(Collection<AssociateEntity> associates) {
        ArrayList<AssociateViewModel> list = new ArrayList<>();
        for (AssociateEntity associate: service.all()) {
            list.add(toViewModel(associate));
        }
        return list;
    }
}
