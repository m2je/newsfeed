package com.m2je.feed;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.codehaus.jackson.map.ObjectMapper;
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

	RestTemplate template;

	@Resource
	protected List<HttpMessageConverter<?>> messageConverters;

	@Value("${serverAddress}")
	protected String serverAddress;

	@Before
	public void init() {
		if (template == null) {
			template = new RestTemplate();
			template.setMessageConverters(messageConverters);
		}
	}

	@Test
	public void testCreate() {
		Feed feed = new Feed();
		feed.setContent("Test content -->" + System.currentTimeMillis());
		feed.setPublishDate(new Date());
		Feed result = template.postForEntity(serverAddress+"/feeds", feed, Feed.class).getBody();
		Assert.assertNotNull(result);
		Assert.assertNotNull(result.getContent());
		Assert.assertNotNull(result.getPublishDate());
	}

	public static void main(String []args) throws Exception{
		Feed feed = new Feed();
		feed.setContent("Test content -->" + System.currentTimeMillis());
		feed.setPublishDate(new Date());
		ObjectMapper m= new ObjectMapper();
		m.setDateFormat(new SimpleDateFormat("MM-dd-yyyy"));
		System.out.println(m.writeValueAsString(feed));
	}
}
