package fsega.project.carpartsshop.controller;

import fsega.project.carpartsshop.model.Car;
import fsega.project.carpartsshop.model.CarPart;
import fsega.project.carpartsshop.model.Invoice;
import fsega.project.carpartsshop.model.InvoiceKey;
import fsega.project.carpartsshop.service.CarPartService;
import fsega.project.carpartsshop.service.CustomerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carpart")
public class CarPartController {
    private final CarPartService carPartService;
    private final CustomerService customerService;

    @Autowired
    public CarPartController(CarPartService carPartService, CustomerService customerService) {
        this.carPartService = carPartService;
        this.customerService = customerService;
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<CarPart>> findAll(){
        return new ResponseEntity<>(carPartService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/findCarPartsForCar/{carId}")
    public ResponseEntity<List<CarPart>> findCarPartsForCar(@PathVariable Long carId){
        return new ResponseEntity<>(carPartService.findCarPartsForCar(carId), HttpStatus.OK);
    }

    @GetMapping("/findAllInvoices")
    public ResponseEntity<List<Invoice>> findAllInvoices(){
        return new ResponseEntity<>(carPartService.findAllInvoices(), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody CarPart carPart){
        carPartService.save(carPart);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @PostMapping("/saveInvoice")
    public ResponseEntity<?> saveInvoice(@RequestBody Invoice invoice){
        System.out.println(invoice);
        if(!customerService.validateCredentials(invoice.getCustomer().getEmail()))
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        if(!carPartService.checkCarPartStock(invoice.getCarPart().getId()))
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        Long customerId = customerService.findByEmail(invoice.getCustomer().getEmail()).get().getId();
        InvoiceKey invoiceKey = new InvoiceKey(customerId,invoice.getCarPart().getId());
        invoice.setInvoiceKey(invoiceKey);
        invoice.getCustomer().setId(customerId);
        carPartService.saveInvoice(invoice);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
