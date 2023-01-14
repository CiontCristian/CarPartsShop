package fsega.project.carpartsshop.service;

import fsega.project.carpartsshop.model.Customer;
import fsega.project.carpartsshop.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerService {
    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public Boolean validateCredentials(String email){
        return customerRepository.findByEmail(email).isPresent();
    }
}
