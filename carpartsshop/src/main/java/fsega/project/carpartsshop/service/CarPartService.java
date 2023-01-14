package fsega.project.carpartsshop.service;

import fsega.project.carpartsshop.model.CarPart;
import fsega.project.carpartsshop.model.Invoice;
import fsega.project.carpartsshop.repository.CarPartRepository;
import fsega.project.carpartsshop.repository.CarRepository;
import fsega.project.carpartsshop.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class CarPartService {
    private final CarPartRepository carPartRepository;
    private final CarRepository carRepository;
    private final InvoiceRepository invoiceRepository;

    @Autowired
    public CarPartService(CarPartRepository carPartRepository, CarRepository carRepository, InvoiceRepository invoiceRepository) {
        this.carPartRepository = carPartRepository;
        this.carRepository = carRepository;
        this.invoiceRepository = invoiceRepository;
    }
    public List<CarPart> findAll(){
        return (List<CarPart>) carPartRepository.findAll();
    }

    public List<CarPart> findCarPartsForCar(Long carId){
        return findAll().stream().filter(carPart -> Objects.equals(carPart.getCar().getId(), carId)).collect(Collectors.toList());
    }

    public void save(CarPart carPart){
        carPartRepository.save(carPart);
    }

    public List<Invoice> findAllInvoices(){
        return (List<Invoice>) invoiceRepository.findAll();
    }

    public void saveInvoice(Invoice invoice){
        invoiceRepository.save(invoice);
    }

}
