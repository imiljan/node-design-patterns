# Proxy

**Intent**: Provide a surrogate or placeholder for another object to control access to it.

Main motivation has to do with the expensive objects. Instead of working directly that requires a lot of recourses, you can work with the proxy.
Object that has exactly the same interface, but it can delay the instantiation of the expensive object and control request made to that object.
