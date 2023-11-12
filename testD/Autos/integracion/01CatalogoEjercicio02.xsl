<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="/">
        <html>
        <link rel="stylesheet" href="estilo.css"/>
        <script src="engineJD.js"></script>        
            <body>
                <h2>Autos Seminuevos</h2>
                <div class="contenido2">
                  <p>Catalogo de Autos Ordenados por Anio del mas antiguo al mas nuevo</p>
                
                <table>
                 <tr >
                    <th>Año</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Precio</th>
                    <th>Combustible</th>
                    <th>Ciudad</th>

                 </tr>
                 <xsl:for-each select="catalogo/auto">
                  <xsl:sort select="anio"/>
                  <tr>
                    <td><xsl:value-of select="anio"/></td> 
                    <td><xsl:value-of select="marca"/></td>  
                    <td><xsl:value-of select="modelo"/></td>
                   <!-- se usa if debido a la complejidad del rango de impresiones en lugar de choose / otherwise.
                   -->
                       <xsl:if test="precio &lt; 100000">
                        <td class="precio">
                          <xsl:value-of select="precio"/>
                        </td>
                       </xsl:if>
                       <xsl:if test="precio &gt; 150000">
                        <td class="naranja">
                           <xsl:value-of select="precio"/>
                        </td>
                       </xsl:if>
                       <xsl:if test="((precio &gt; 100000) and (precio &lt; 150000))" >
                       <td>
                         <xsl:value-of select="precio"/>
                       </td>
                       </xsl:if>
                     <td>
                      <xsl:value-of select="combustible"/>
                     </td>
                     <xsl:choose>
                     <xsl:when test="ciudad = 'DF'">
                      <td class="city">    
                       <xsl:value-of select="ciudad"/>
                      </td>
                     </xsl:when>
                     <xsl:otherwise>
                      <td><xsl:value-of select="ciudad"/></td>
                    </xsl:otherwise>  
                  </xsl:choose>  
                  </tr>  
                </xsl:for-each>
                </table>
                </div>
                <div class="contenido2">
                  <p>Catalogo de Autos Ordenados por Marca</p>
                <table>
                 <tr >
                    <th>Año</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Precio</th>
                    <th>Combustible</th>
                    <th>Ciudad</th>
                 </tr>
                 <xsl:for-each select="catalogo/auto">
                  <xsl:sort select="marca"/>
                  <tr>
                    <td><xsl:value-of select="anio"/></td> 
                    <td><xsl:value-of select="marca"/></td>  
                    <td><xsl:value-of select="modelo"/></td>
                   <!-- se usa if debido a la complejidad del rango de impresiones en lugar de choose / otherwise.
                   -->
                       <xsl:if test="precio &lt; 100000">
                        <td class="precio">
                          <xsl:value-of select="precio"/>
                        </td>
                       </xsl:if>
                       <xsl:if test="precio &gt; 150000">
                        <td class="naranja">
                           <xsl:value-of select="precio"/>
                        </td>
                       </xsl:if>
                       <xsl:if test="((precio &gt; 100000) and (precio &lt; 150000))" >
                       <td>
                         <xsl:value-of select="precio"/>
                       </td>
                       </xsl:if>
                     <td>
                      <xsl:value-of select="combustible"/>
                     </td>
                     <xsl:choose>
                     <xsl:when test="ciudad = 'DF'">
                      <td class="city">    
                       <xsl:value-of select="ciudad"/>
                      </td>
                     </xsl:when>
                     <xsl:otherwise>
                      <td><xsl:value-of select="ciudad"/></td>
                    </xsl:otherwise>  
                  </xsl:choose>  
                  </tr>  
                </xsl:for-each>
                </table>
              </div>
              <div class="contenido2">
                  <p>Catalogo de Autos Ordenados por Ubicación geográfica</p>
               <table>
                 <tr >
                    <th>Año</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Precio</th>
                    <th>Combustible</th>
                    <th>Ciudad</th>
                 </tr>
                 <xsl:for-each select="catalogo/auto">
                  <xsl:sort select="ciudad"/>
                  <tr>
                    <td><xsl:value-of select="anio"/></td> 
                    <td><xsl:value-of select="marca"/></td>  
                    <td><xsl:value-of select="modelo"/></td>
                   <!-- se usa if debido a la complejidad del rango de impresiones en lugar de choose / otherwise.
                   -->
                       <xsl:if test="precio &lt; 100000">
                        <td class="precio">
                          <xsl:value-of select="precio"/>
                        </td>
                       </xsl:if>
                       <xsl:if test="precio &gt; 150000">
                        <td class="naranja">
                           <xsl:value-of select="precio"/>
                        </td>
                       </xsl:if>
                       <xsl:if test="((precio &gt; 100000) and (precio &lt; 150000))" >
                       <td>
                         <xsl:value-of select="precio"/>
                       </td>
                       </xsl:if>
                     <td>
                      <xsl:value-of select="combustible"/>
                     </td>
                     <xsl:choose>
                     <xsl:when test="ciudad = 'DF'">
                      <td class="city">    
                       <xsl:value-of select="ciudad"/>
                      </td>
                     </xsl:when>
                     <xsl:otherwise>
                      <td><xsl:value-of select="ciudad"/></td>
                    </xsl:otherwise>  
                  </xsl:choose>  
                  </tr>  
                </xsl:for-each>
                </table>
              </div>
                <h1>Fecha</h1>
                <p>Click aqui.
                 <button type="button" onclick="myFunction()">Try it</button>
              </p>
                 <p id="demo"></p>
              
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>