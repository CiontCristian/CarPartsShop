package fsega.project.carpartsshop.controller;

import fsega.project.carpartsshop.model.Car;
import fsega.project.carpartsshop.model.CarPart;
import fsega.project.carpartsshop.model.Invoice;
import fsega.project.carpartsshop.model.InvoiceKey;
import fsega.project.carpartsshop.service.CarPartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carpart")
public class CarPartController {
    private CarPartService carPartService;

    @Autowired
    public CarPartController(CarPartService carPartService) {
        this.carPartService = carPartService;
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<CarPart>> findAll(){
        return new ResponseEntity<>(carPartService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/findCarPartsForCar/{carPartId}")
    public ResponseEntity<List<CarPart>> findCarPartsForCar(@PathVariable Long carPartId){
        return new ResponseEntity<>(carPartService.findCarPartsForCar(carPartId), HttpStatus.OK);
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
        InvoiceKey invoiceKey = new InvoiceKey(invoice.getCarPart().getId(), invoice.getCustomer().getId());
        invoice.setInvoiceKey(invoiceKey);
        carPartService.saveInvoice(invoice);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
