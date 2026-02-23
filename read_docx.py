import zipfile
import xml.etree.ElementTree as ET

def get_docx_text(path):
    """
    Extracts text from a docx file.
    This is a simplified version that just gets the text content.
    """
    try:
        with zipfile.ZipFile(path) as docx:
            xml_content = docx.read('word/document.xml')
        
        tree = ET.fromstring(xml_content)
        
        # Namespaces
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        paragraphs = []
        for p in tree.findall('.//w:p', ns):
            texts = [t.text for t in p.findall('.//w:t', ns) if t.text]
            if texts:
                paragraphs.append("".join(texts))
        
        return "\n".join(paragraphs)
    except Exception as e:
        return f"Error: {e}"

path = r'C:\Users\crodr\.gemini\antigravity\scratch\erasmus-connect-us\Memoria Proyecto ErasmusConnect.docx'
print(get_docx_text(path))
