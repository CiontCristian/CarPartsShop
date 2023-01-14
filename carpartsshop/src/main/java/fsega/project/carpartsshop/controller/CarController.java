package fsega.project.carpartsshop.controller;

import fsega.project.carpartsshop.model.Car;
import fsega.project.carpartsshop.model.CarPart;
import fsega.project.carpartsshop.model.Invoice;
import fsega.project.carpartsshop.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/car")
public class CarController {
    private final CarService carService;

    @Autowired
    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping("/findAllI")
    public ResponseEntity<List<Car>> findAll(){
        return new ResponseEntity<>(carService.findAll(), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody Car car){
        carService.save(car);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
