package spring.eventsapi.Services;

import spring.eventsapi.Repositories.NationalityRepository;
import spring.eventsapi.Nationality;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NationalityService {
	
	@Autowired
	private NationalityRepository nationalityRepository;
	
	public List<Nationality> getAllNationalities(){
		List<Nationality> nationalities = new ArrayList<>();
		nationalityRepository.findAll().forEach(nationalities::add);
		return nationalities;
	}
	
	public Nationality getNationality(String id) {
		Optional<Nationality> optNationality = nationalityRepository.findById(id);
		if (optNationality.isPresent()){
		    Nationality pers = optNationality.get();
		    return pers;
		}
		else{
			return null;
		}
	}

	public List<Nationality> getNationalityByCountry(String name) {
		return nationalityRepository.findByCoutryIgnoreCaseContaining(name);
	}
	
	public void addNationality(Nationality nationality) {
		nationalityRepository.save(nationality);
	}

	
	public void deleteNationality(String id) {
		nationalityRepository.deleteById(id);
	}
}