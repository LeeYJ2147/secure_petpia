package com.petpia.backend_petpia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import com.example.demo.config.JwtProperties;

@SpringBootApplication
public class BackendPetpiaApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendPetpiaApplication.class, args);
	}

}
