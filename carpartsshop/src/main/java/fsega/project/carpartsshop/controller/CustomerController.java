package fsega.project.carpartsshop.controller;

import fsega.project.carpartsshop.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping("/validateCredentials/{email}")
    public ResponseEntity<Boolean> validateCredentials(@PathVariable String email){
        return new ResponseEntity<>(customerService.validateCredentials(email), HttpStatus.OK);
    }
}
