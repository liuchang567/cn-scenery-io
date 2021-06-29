define(["./when-208fe5b0","./Cartesian2-b4b7b0b3","./arrayRemoveDuplicates-3a9a9480","./BoundingRectangle-47baedda","./Transforms-d5dbea8d","./ComponentDatatype-ce69354e","./PolylineVolumeGeometryLibrary-f1531841","./Check-5e798bbf","./GeometryAttribute-3314089a","./GeometryAttributes-b0b294d8","./GeometryPipeline-cd170892","./IndexDatatype-da7c58eb","./Math-8386669c","./PolygonPipeline-7bfe45de","./VertexFormat-7e57a3bd","./RuntimeError-7f634f5d","./WebGLConstants-76bb35d1","./EllipsoidTangentPlane-7dd3130c","./IntersectionTests-eb44dd99","./Plane-06d5a63d","./PolylinePipeline-b25bdf3a","./EllipsoidGeodesic-92f0d3cc","./EllipsoidRhumbLine-73a4e3eb","./AttributeCompression-9711314b","./EncodedCartesian3-21af0f3b"],function(u,c,r,a,T,G,o,e,A,R,D,I,i,O,g,t,n,l,s,d,p,y,m,h,f){"use strict";var b={};function S(e,t){u.defined(b[e])||(b[e]=!0,console.warn(u.defaultValue(t,e)))}function v(e){var t=(e=u.defaultValue(e,u.defaultValue.EMPTY_OBJECT)).polylinePositions,n=e.shapePositions;this._positions=t,this._shape=n,this._ellipsoid=c.Ellipsoid.clone(u.defaultValue(e.ellipsoid,c.Ellipsoid.WGS84)),this._cornerType=u.defaultValue(e.cornerType,o.CornerType.ROUNDED),this._vertexFormat=g.VertexFormat.clone(u.defaultValue(e.vertexFormat,g.VertexFormat.DEFAULT)),this._granularity=u.defaultValue(e.granularity,i.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry";t=1+t.length*c.Cartesian3.packedLength;t+=1+n.length*c.Cartesian2.packedLength,this.packedLength=t+c.Ellipsoid.packedLength+g.VertexFormat.packedLength+2}S.geometryOutlines="Entity geometry outlines are unsupported on terrain. Outlines will be disabled. To enable outlines, disable geometry terrain clamping by explicitly setting height to 0.",S.geometryZIndex="Entity geometry with zIndex are unsupported when height or extrudedHeight are defined.  zIndex will be ignored",S.geometryHeightReference="Entity corridor, ellipse, polygon or rectangle with heightReference must also have a defined height.  heightReference will be ignored",S.geometryExtrudedHeightReference="Entity corridor, ellipse, polygon or rectangle with extrudedHeightReference must also have a defined extrudedHeight.  extrudedHeightReference will be ignored",v.pack=function(e,t,n){var i;n=u.defaultValue(n,0);var r=e._positions,a=r.length;for(t[n++]=a,i=0;i<a;++i,n+=c.Cartesian3.packedLength)c.Cartesian3.pack(r[i],t,n);var o=e._shape,a=o.length;for(t[n++]=a,i=0;i<a;++i,n+=c.Cartesian2.packedLength)c.Cartesian2.pack(o[i],t,n);return c.Ellipsoid.pack(e._ellipsoid,t,n),n+=c.Ellipsoid.packedLength,g.VertexFormat.pack(e._vertexFormat,t,n),n+=g.VertexFormat.packedLength,t[n++]=e._cornerType,t[n]=e._granularity,t};var E=c.Ellipsoid.clone(c.Ellipsoid.UNIT_SPHERE),P=new g.VertexFormat,_={polylinePositions:void 0,shapePositions:void 0,ellipsoid:E,vertexFormat:P,cornerType:void 0,granularity:void 0};v.unpack=function(e,t,n){t=u.defaultValue(t,0);for(var i=e[t++],r=new Array(i),a=0;a<i;++a,t+=c.Cartesian3.packedLength)r[a]=c.Cartesian3.unpack(e,t);var i=e[t++],o=new Array(i);for(a=0;a<i;++a,t+=c.Cartesian2.packedLength)o[a]=c.Cartesian2.unpack(e,t);var l=c.Ellipsoid.unpack(e,t,E);t+=c.Ellipsoid.packedLength;var s=g.VertexFormat.unpack(e,t,P);t+=g.VertexFormat.packedLength;var d=e[t++],p=e[t];return u.defined(n)?(n._positions=r,n._shape=o,n._ellipsoid=c.Ellipsoid.clone(l,n._ellipsoid),n._vertexFormat=g.VertexFormat.clone(s,n._vertexFormat),n._cornerType=d,n._granularity=p,n):(_.polylinePositions=r,_.shapePositions=o,_.cornerType=d,_.granularity=p,new v(_))};var x=new a.BoundingRectangle;return v.createGeometry=function(e){var t=e._positions,n=r.arrayRemoveDuplicates(t,c.Cartesian3.equalsEpsilon),i=e._shape,i=o.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(i);if(!(n.length<2||i.length<3)){O.PolygonPipeline.computeWindingOrder2D(i)===O.WindingOrder.CLOCKWISE&&i.reverse();t=a.BoundingRectangle.fromPoints(i,x);return function(e,t,n,i){var r=new R.GeometryAttributes;i.position&&(r.position=new A.GeometryAttribute({componentDatatype:G.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e}));var a,o,l,s,d,p=t.length,u=e.length/3,c=(u-2*p)/(2*p),g=O.PolygonPipeline.triangulate(t),y=(c-1)*p*6+2*g.length,m=I.IndexDatatype.createTypedArray(u,y),h=2*p,f=0;for(C=0;C<c-1;C++){for(a=0;a<p-1;a++)d=(o=2*a+C*p*2)+h,s=(l=o+1)+h,m[f++]=l,m[f++]=o,m[f++]=s,m[f++]=s,m[f++]=o,m[f++]=d;s=(l=(o=2*p-2+C*p*2)+1)+h,d=o+h,m[f++]=l,m[f++]=o,m[f++]=s,m[f++]=s,m[f++]=o,m[f++]=d}if(i.st||i.tangent||i.bitangent){for(var b,v,E=new Float32Array(2*u),P=1/(c-1),_=1/n.height,x=n.height/2,k=0,C=0;C<c;C++){for(v=_*(t[0].y+x),E[k++]=b=C*P,E[k++]=v,a=1;a<p;a++)v=_*(t[a].y+x),E[k++]=b,E[k++]=v,E[k++]=b,E[k++]=v;v=_*(t[0].y+x),E[k++]=b,E[k++]=v}for(a=0;a<p;a++)v=_*(t[a].y+x),E[k++]=b=0,E[k++]=v;for(a=0;a<p;a++)v=_*(t[a].y+x),E[k++]=b=(c-1)*P,E[k++]=v;r.st=new A.GeometryAttribute({componentDatatype:G.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array(E)})}var V=u-2*p;for(C=0;C<g.length;C+=3){var L=g[C]+V,w=g[C+1]+V,F=g[C+2]+V;m[f++]=L,m[f++]=w,m[f++]=F,m[f++]=F+p,m[f++]=w+p,m[f++]=L+p}if(e=new A.Geometry({attributes:r,indices:m,boundingSphere:T.BoundingSphere.fromVertices(e),primitiveType:A.PrimitiveType.TRIANGLES}),i.normal&&(e=D.GeometryPipeline.computeNormal(e)),i.tangent||i.bitangent){try{e=D.GeometryPipeline.computeTangentAndBitangent(e)}catch(e){S("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}i.tangent||(e.attributes.tangent=void 0),i.bitangent||(e.attributes.bitangent=void 0),i.st||(e.attributes.st=void 0)}return e}(o.PolylineVolumeGeometryLibrary.computePositions(n,i,t,e,!0),i,t,e._vertexFormat)}},function(e,t){return(e=u.defined(t)?v.unpack(e,t):e)._ellipsoid=c.Ellipsoid.clone(e._ellipsoid),v.createGeometry(e)}});
