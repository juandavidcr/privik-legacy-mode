/**
 * Autor: Mtro. Carlos Roberto Jaimez González
 * U.E.A. Integración de Sistemas
 */
package integracion;

//Clases Xalan
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.stream.StreamSource;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerConfigurationException;
//Clases java
import java.io.FileOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;


public class Transformacion {

    public static void main(String[] args)
            throws TransformerException, TransformerConfigurationException,
            FileNotFoundException, IOException {

        String xml = args[0];
        String xsl = args[1];
        String html = args[2];


        // Use the static TransformerFactory.newInstance() method to instantiate
        // a TransformerFactory. The javax.xml.transform.TransformerFactory
        // system property setting determines the actual class to instantiate --
        // org.apache.xalan.transformer.TransformerImpl.
        TransformerFactory tFactory = TransformerFactory.newInstance();

        // Use the TransformerFactory to instantiate a Transformer that will work with
        // the stylesheet you specify. This method call also processes the stylesheet
        // into a compiled Templates object.
        Transformer transformer = tFactory.newTransformer(new StreamSource(xsl));

        // Use the Transformer to apply the associated Templates object to an XML document
        // (archivo.xml) and write the output to a file (archivo.html).
        transformer.transform(
                new StreamSource(xml),
                new StreamResult(new FileOutputStream(html)));

        System.out.println("************* El resultado es " + html + " *************");
    }
}
