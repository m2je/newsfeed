package com.m2je.feedserver.util;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.SerializerProvider;

public class JacksonUtil {

	public static final String dateFormatStr = "MM/dd/yyyy";
	
	public static final SimpleDateFormat format=new SimpleDateFormat(dateFormatStr);
	
	public static class JacksonDateSerilizer extends
	com.fasterxml.jackson.databind.JsonSerializer<Date> {

@Override
public void serialize(Date value, JsonGenerator jgen,
		SerializerProvider provider) throws IOException,
		JsonProcessingException {
	jgen.writeString( format.format(value));
}
}

public static class JacksonDateDeserilizer extends
	com.fasterxml.jackson.databind.JsonDeserializer<Date> {

@Override
public Date deserialize(JsonParser jp, DeserializationContext ctxt)
		throws IOException, JsonProcessingException {
	return deserilize(jp.getText(),format);

}
}


public static Date deserilize(String v, SimpleDateFormat dateFormat) {
	if (v != null) {
		if (v.matches("[0-9]+")) {
			return new Date(Long.parseLong(v));
		} else if (dateFormat != null) {

			synchronized (dateFormat) {
				try {
					return dateFormat.parse(v);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
	}

	return null;
}

}
