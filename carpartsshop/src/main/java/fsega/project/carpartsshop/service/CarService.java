package fsega.project.carpartsshop.service;

import fsega.project.carpartsshop.model.Car;
import fsega.project.carpartsshop.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {
    private final CarRepository carRepository;

    @Autowired
    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public void save(Car car){
        carRepository.save(car);
    }

    public List<Car> findAll(){
        return (List<Car>) carRepository.findAll();
    }
}
