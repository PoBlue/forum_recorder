import rows
import json

AND_FILE = "and.json"
FEND_FILE = "fend.json"
output_path = "output_csv/"
with open(AND_FILE) as data_file:
    data = json.load(data_file)

table = rows.import_from_dicts(data)
rows.export_to_csv(table, output_path + "and.csv")