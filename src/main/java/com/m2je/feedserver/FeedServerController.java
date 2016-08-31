package com.m2je.feedserver;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.m2je.feedserver.model.Feed;

@Controller
public class FeedServerController {

	@Autowired
	private FeedService adService;
	
	@ResponseBody
	@RequestMapping(value="/feeds",method=RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Feed create(@Valid @RequestBody(required=true) Feed ad){
		return adService.create(ad);
	}
	
	@ResponseBody
	@RequestMapping(value="/feeds",method=RequestMethod.GET)
	@ResponseStatus(HttpStatus.CREATED)
	public List<Feed> list(){
		return adService.list();
	}
	
}
