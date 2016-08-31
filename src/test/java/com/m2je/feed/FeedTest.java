package com.m2je.feed;
import java.util.List;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.web.client.RestTemplate;

import com.m2je.feedserver.model.Feed;




@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "/test-api.xml")
public class FeedTest {


	RestTemplate template ;
	
	@Resource
	protected List<HttpMessageConverter<?>> messageConverters;
	
	@Value("${serverAddress}")
	protected String serverAddress;

	
	@Before
	public void init(){
		if(template==null){
			template = new RestTemplate();
			template.setMessageConverters(messageConverters);
		}
	}
	
	@Test
	public void testCreate(){
			}
	
}
